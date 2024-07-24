<script></script>

<template>
  <section class="hero section">
    <div class="container">
      <div class="columns is-variable is-8 is-vcentered">
        <div class="column is-one-third hero__profile">
          <div class="hero__img-wrap">
            <img src="@/assets/images/tomas.jpg" alt="" />
            <div class="shadow"></div>
          </div>
        </div>
        <div class="column hero__description">
          <div>
            <h1 class="is-size-2 is-size-4-mobile mb-4">
              Hi, I am <b>Tomas</b> - freelance backend engineer, nice to meet you 👋
            </h1>
            <h2 class="is-size-5 is-size-6-mobile">
              With over seven years of professional experience, I bring a rich technical background
              and a diverse skill set to every project
            </h2>
            <div class="mb-5 my-5">
              <p class="is-size-5">
                <v-icon scale="1" name="co-location-pin" color="green" /> Lithuania, Vilnius; Remote
                :)
              </p>
              <p class="is-size-5">
                <v-icon scale="1" name="co-check" color="green" /> Available for new projects
              </p>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/tomaskri" target="_blank" class="m-1">
                <v-icon scale="2" name="co-linkedin-in" />
              </a>
              <a href="https://github.com/krizanauskas" target="_blank" class="m-1">
                <v-icon scale="2" name="co-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about has-text-centered">
    <span class="tag is-light mb-6 is-medium">About me</span>

    <div class="slider__wrapper">
      <swiper-container
        class="swiper"
        :navigation="true"
        pagination="true"
        loop="true"
        :breakpoints="{
          '1': {
            navigation: {
              enabled: false
            }
          },
          '768': {
            navigation: {
              enabled: true
            }
          }
        }"
      >
        <swiper-slide class="swiper-slide">
          <div class="slide__content">
            <div class="has-text-left is-size-5">
              <p>
                As a web developer with over seven years of professional experience, I bring a rich
                technical background and a diverse skill set to every project
              </p>
              <p>
                I am eager to join a team as a part time or full time contractor, focused on
                complex, high-performance distributed systems. I enjoy taking on new and challenging
                tasks that produce meaningful results, and I find motivation in seeing the visible
                impact of my work. Additionally, I am passionate about sharing my knowledge to help
                younger professionals grow.
              </p>
              <p>
                My professional strengths include a proactive work style, strong problem-solving
                abilities, and a passion for continuous learning. I am motivated by the drive to
                create efficient, scalable solutions that meet complex needs.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="slide__content">
            <div class="has-text-left is-size-5">
              <p>
                My career began with building custom websites and CMS systems using Laravel and PHP,
                providing customized solutions for various clients.
              </p>
              <p>
                I then joined a call center startup, where I expanded my expertise with technologies
                such as AWS, Redis, WebRTC, and WebSockets, you can check more about it in
                "portfolio" page.
              </p>
              <p>
                In this role, I contributed to the development of a multichannel call center
                software, centralizing chat, email, and call communications with custom analytics
                and agent management tools.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="slide__content">
            <div class="has-text-left is-size-5">
              <p>
                After gaining substantial experience, I transitioned to freelancing, tackling
                diverse projects including developing a website builder SaaS for the real estate
                industry, which was eventually purchased by an investor.
              </p>
              <p>
                My next significant role was with SumUp, a small merchant bank, where I focused on
                decoupling a monolithic PHP application into microservices and refactoring the
                database architecture to enhance throughput.
              </p>
              <p>
                During this time, I focused primarily on GOLANG, accumulating a lot of experience.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>

  <section class="contacts" id="contacts">
    <div class="container">
      <div class="contacts__info">
        <p class="is-size-4 mb-4">
          <b>What’s next?</b> Feel free to reach out to me if you're looking for a developer, have a
          query, or simply want to connect.
        </p>
        <div class="mb-4 is-size-5">
          <p class="has-text-weight-bold">tomaskrizanauskas@gmail.com</p>
          <p class="has-text-weight-bold" href="tel:+37060266561">+370 60266561</p>
        </div>

        <p class="is-size-5 mb-3">You may also find me on these platforms</p>

        <div>
          <a href="https://www.linkedin.com/in/tomaskri" target="_blank" class="m-1">
            <v-icon scale="2" name="co-linkedin-in" />
          </a>
          <a href="https://github.com/krizanauskas" class="m-1">
            <v-icon scale="2" name="co-github" />
          </a>
        </div>
        <p class="is-size-6 mb-3">or</p>

        <a class="button is-primary mb-6 disabled"> Schedule a call </a>

        <p class="has-text-weight-semibold is-size-6" style="display: none">Or text me an email</p>
      </div>
      <div class="cf-container" style="display: none">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Name" />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="your email" />
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field my-5">
          <button class="button is-primary is-fullwidth">Send Message</button>
        </div>
      </div>
    </div>
  </section>
</template>
