import React, { Component } from "react";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  toggleAccordion(index) {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  }

  render() {
    const { preguntas } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="space-y-4">
        {preguntas.map((faq, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm cursor-pointer"
            onClick={() => this.toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-primary_brand">
                {faq.pregunta}
              </h3>
              <span className="text-primary_brand">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.respuesta}</p>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Accordion;
