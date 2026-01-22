module.exports = (req, res) => {
  const data = {
    message: 'Download endpoint',
    timestamp: Date.now()
  };

  res.status(200).json(data);
};
