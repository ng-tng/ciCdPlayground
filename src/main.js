import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Nico",
    // In the following fields you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Pipeline","Automation","Deployments"],
    // Which CI/CD tools do you use in your project?
    tools: "Azure Pipelines",
    // What do you want to learn in this workshop?
    expectations: ["What Jenkins is","How CI/CD can be used in GitHub"],
  },
});
