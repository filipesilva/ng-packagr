import * as path from 'path';
import { ngPackagr } from '../../../../src/public_api';

describe(`Failure Builds`, () => {
  describe(`non-peer-deps`, () => {
    it(`should fail`, done => {
      this.timeout(9999);
      const pkgJson = path.resolve(__dirname, '..', 'non-peer-deps', 'package.json');

      ngPackagr()
        .forProject(pkgJson)
        .build()
        .then(() => {
          fail();
        })
        .catch(err => {
          if (err) {
            console.error(err);
            done();
          } else {
            fail();
          }
        });
    });
  });
});
