const React = require("react");
const { shallow } = require("enzyme");
const Hero = require("../../src/components/hero").default;

describe("Hero component", () => {
  it("should render a title and description", () => {
    const component = shallow(<Hero title="Title" description="Description" />);
    expect(component.find(".title").text()).toBe("Title");
    expect(component.find(".subtitle").text()).toBe("Description");
  });
});
