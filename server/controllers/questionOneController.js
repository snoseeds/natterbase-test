import issueErrorResponse from '../helpers/issueErrorResponse';

const questionOneSolution = {
  inputValidation(req, res) {
    const { data, rules } = req.body;
    const suppliedDataProperties = Object.keys(data);
    const missingPropertiesArr = rules
      .filter(rule => suppliedDataProperties.every(prop => prop !== rule));
    return missingPropertiesArr.length === 0
      ? res.status(200).json({
        status: 200,
        message: 'valid',
      })
      : issueErrorResponse(res, 400, missingPropertiesArr);
  },
};

export default questionOneSolution;
