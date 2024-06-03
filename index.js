$(document).ready(() => {
  const target = Array.from($("#pushpin").children().children()).filter(
    (dom) => dom.id === "radialGradient4030"
  )[0];
  Array.from(target.children).forEach((childDom) => {
    $(childDom).attr('stop-color', 'green')
  })
});
