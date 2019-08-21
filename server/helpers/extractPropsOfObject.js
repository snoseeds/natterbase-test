const extractPropsOfObject = (obj, arrOfExtractedProps) => Object.entries(obj)
  .reduce((extractedObj, [key, value]) => arrOfExtractedProps
    .some(prop => prop === key)
    ? { ...extractedObj, [key]: value }
    : extractedObj, {});

export default extractPropsOfObject;
