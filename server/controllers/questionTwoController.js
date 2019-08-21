import extractPropsOfObject from '../helpers/extractPropsOfObject';
import issueResponse from '../helpers/issueResponse';

const questionTwoSolution = {
  removeObjectProperty(req, res) {
    const { data, item } = req.body;
    const allPropsArr = Object.keys(data);
    const propsToBeReturnedArr = allPropsArr.filter(prop => prop !== item);
    return propsToBeReturnedArr.length === allPropsArr.length
      ? issueResponse(res, 400, 'error', 'attribute not found')
      : issueResponse(res, 200, 'data', extractPropsOfObject(data, propsToBeReturnedArr));
  },
};

export default questionTwoSolution;
