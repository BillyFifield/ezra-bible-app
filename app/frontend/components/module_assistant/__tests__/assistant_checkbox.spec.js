require('../assistant_checkbox');

describe('<assistant-checkbox>', () => {

  it('renders without errors', () => {
    document.body.innerHTML = '<assistant-checkbox>Test</assistant-checkbox>';
    expect(document.body.innerHTML).toEqual('<assistant-checkbox></assistant-checkbox>');
  });

  it('has a shadow DOM', () =>{
    const el = document.createElement('assistant-checkbox');
    document.body.appendChild(el);
    expect(el.shadowRoot).toBeDefined();
  });

  it('renders correctly', () => {
    document.body.innerHTML = '<assistant-checkbox count="5" checked>Test</assistant-checkbox>';
    const el = document.querySelector('assistant-checkbox');
    
    expect(el.shadowRoot.textContent).toContain('Test (5)');

    expect(el.shadowRoot.querySelector('input[type="checkbox"]').hasAttribute('checked')).toEqual(true);
  });

});
