const createResource = (promise: Promise<unknown>) => {
  let status = 'pending';
  let result: unknown;
  let suspender = promise.then(
    data => {
      status = 'success';
      result = data;
    },
    error => {
      status = 'error';
      result = error;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
};

export default createResource;