// TODO: Add hello code
function getMessage(name) {
  return 'Hello, ' + name + '...';
  }

const message = getMessage('Ornella');
  document.write(message);

// TODO: Add setTimeout code
setTimeout(
  () => { document.write('...Hello again!')},
    2000
  );
