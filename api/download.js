module.exports = async (req, res) => {
  const { type = 'release' } = req.query;
  const { GITHUB_TOKEN, REPO_OWNER, REPO_NAME, WORKFLOW_ID } = process.env;

  if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME || !WORKFLOW_ID) {
    console.error('Missing configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const headers = {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Vercel-Serverless-Function'
    };

    // 1. Get latest run
    const runsUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/workflows/${WORKFLOW_ID}/runs?per_page=1`;
    const runsRes = await fetch(runsUrl, { headers });

    if (!runsRes.ok) {
      console.error(`GitHub API error (runs): ${runsRes.status} ${runsRes.statusText}`);
      return res.status(500).json({ error: 'Failed to fetch workflow runs' });
    }

    const runsData = await runsRes.json();
    const run = runsData.workflow_runs && runsData.workflow_runs[0];

    if (!run) {
      return res.status(404).json({ error: 'No workflow runs found' });
    }

    // 2. Get artifacts
    const artifactsUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/runs/${run.id}/artifacts`;
    const artifactsRes = await fetch(artifactsUrl, { headers });

    if (!artifactsRes.ok) {
      console.error(`GitHub API error (artifacts): ${artifactsRes.status} ${artifactsRes.statusText}`);
      return res.status(500).json({ error: 'Failed to fetch artifacts' });
    }

    const artifactsData = await artifactsRes.json();

    // 3. Find artifact
    const artifact = artifactsData.artifacts.find(art => art.name.includes(type));

    if (!artifact) {
      return res.status(404).json({ error: `Artifact not found for type: ${type}` });
    }

    // 4. Redirect
    return res.redirect(artifact.archive_download_url);

  } catch (error) {
    console.error('Internal Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
