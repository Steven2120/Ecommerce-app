exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Private data access approved through valid credentials",
  });
};
