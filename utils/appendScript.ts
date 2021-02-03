type appendScriptArgs = {
  isAsync: boolean;
  isDefer: boolean;
  src: string;
};

const appendScript = ({ isAsync, isDefer, src }: appendScriptArgs) => {
  const script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('async', isAsync ? 'true' : 'false');
  script.setAttribute('defer', isDefer ? 'true' : 'false');
  document.body.appendChild(script);
};

export default appendScript;
