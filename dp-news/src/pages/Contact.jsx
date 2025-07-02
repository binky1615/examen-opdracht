import React from "react";

function Contact() {
  return (
    <>
      <section className="bg-gray-400 h-screen flex flex-row justify-center items-center text-center gap-64">
        <section className="flex flex-col bg-gray-300 p-5 rounded-lg justify-start">
          <p className="text-3xl font-bold mb-6 text-purple-600">Contact Info</p>
          <p className="text-xl">
            If you find any bugs or have any questions or just want to say hi, <br/>
            then you can contact me through my socials
          </p>
          <div className="flex flex-col mt-4">
          <a className="text-purple-500 text-xl" href="https://www.outlook.com">E-mail</a>
          <a className="text-purple-500 text-xl" href="https://www.facebook.com/DP-News">Facebook</a>
          <a className="text-purple-500 text-xl" href="https://www.bluesky.com/@dpnews">bluesky</a>
          <a className="text-purple-500 text-xl" href="https://www.reddit.com/ur/dpnews">Reddit</a>
          <a className="text-purple-500 text-xl" href="https://twitch.tv/dpnews">twitch</a>
          </div>
        </section>
        <section className="flex flex-col gap-10 size-1/6 mb-80">
          <img src="/gwen pfp.png" alt="" />
          <img src="/PRINCESS.png" alt="" />
        </section>
      </section>
    </>
  );
}

export default Contact;
