import jasmineEnzyme from 'jasmine-enzyme'
import {configure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() });

beforeEach(function() {
  jasmineEnzyme();
});