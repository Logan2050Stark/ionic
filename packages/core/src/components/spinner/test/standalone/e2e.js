
  const { register, navigate } = require('../../../../../scripts/e2e');

  describe('spinner/standalone', () => {

    register('should init', navigate('http://localhost:3333/src/components/spinner/test/standalone'));

  });
  
