const issueErrorResponse = (res, errCode, missingData) => res.status(errCode)
  .json({
    status: errCode,
    missingData,
  });

export default issueErrorResponse;
