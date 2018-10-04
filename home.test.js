import { shallow } from 'enzyme';
import Home from "./src/js/components/container/Home";
import GroupList from "./src/js/components/presentational/GroupList";
describe('<Home />', () => {
  it('renders five <GroupList /> components', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(GroupList)).to.have.lengthOf(5);
  });

  
});