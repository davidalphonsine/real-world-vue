import { shallowMount } from "@vue/test-utils";
import TodoListItem from "@/components/TodoListItem.vue";

describe("TodoListItem", () => {
  const wrapper = shallowMount(TodoListItem, {
    propsData: {
      todo: {
        id: 1,
        text: "toto"
      }
    }
  });

  it("Renders the correct markup", () => {
    expect(wrapper.html()).toContain("toto");
  });

  // Check for existence of elements
  it("Has a button", () => {
    expect(wrapper.contains("button")).toBe(true);
  });

  it("Should emit a remove event on button click", () => {
    expect(wrapper.contains("button")).toBe(true);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.emitted().remove.length).toBe(1);
    expect(wrapper.emitted().remove[0]).toEqual([1]);
  });
});
