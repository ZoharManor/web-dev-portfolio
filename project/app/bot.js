"use client";

const initializeBot = () => {
  const v = document.createElement("script");
  const s = document.getElementsByTagName("script")[0];
  v.onload = function () {
    window.voiceflow.chat.load({
      verify: { projectID: "65a82d812f5982dcf3cc71c1" },
      url: "https://general-runtime.voiceflow.com",
      versionID: "production",
    });
  };
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
};

export default initializeBot;
