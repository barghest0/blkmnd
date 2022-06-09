type Errors = {
  [index: string]: string[];
};

const convertErrorsToArray = (errors: Errors) =>
  Object.values(errors)
    .flat()
    .map((error) => error);

export { convertErrorsToArray };
