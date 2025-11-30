<template>
  <div class="showcase">
    <div class="showcase-content">
      <h1 class="showcase-title">
        Don't miss amazing<br />grocery deals
      </h1>
      <p class="showcase-subtitle">Sign up for the daily newsletter</p>
      <div class="newsletter-form">
        <div class="input-wrapper">
          <svg class="email-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <input type="email" class="email-input" placeholder="Your email address" v-model="email" />
        </div>
        <button class="subscribe-button">Subscribe</button>
      </div>
    </div>
    <div class="showcase-image">
      <img src="../assets/showCaseApple.png" alt="Fresh vegetables" />
    </div>
    <div class="showcase-bg">
      <img src="../assets/showCaseBg.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowCaseComponent',
  data() {
    return {
      email: '',
    }
  },
}
</script>

<style scoped>
.showcase {
  position: relative;
  width: 100%;
  max-width: 1750px;
  height: 538px;
  background: linear-gradient(135deg, #fff2d9 0%, #ffe9c9 100%);
  border-radius: 20px;
  padding: 60px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin: 0 auto;
}

.showcase-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.15;
  z-index: 0;
}

.showcase-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.showcase-content {
  z-index: 1;
  max-width: 500px;
}

.showcase-title {
  font-size: 52px;
  font-weight: 700;
  color: #253d4e;
  line-height: 1.2;
  margin-bottom: 15px;
}

.showcase-subtitle {
  font-size: 18px;
  color: #7e7e7e;
  margin-bottom: 30px;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  max-width: 450px;
}

.input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  padding: 5px 5px 5px 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.email-icon {
  width: 20px;
  height: 20px;
  color: #adadad;
  margin-right: 10px;
  flex-shrink: 0;
}

.email-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  color: #253d4e;
  background: transparent;
}

.email-input::placeholder {
  color: #adadad;
}

.subscribe-button {
  background: #3bb77e;
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.subscribe-button:hover {
  background: #2d9a68;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(59, 183, 126, 0.3);
}

.showcase-image {
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 895px;
  height: 538px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.showcase-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 100%;
}

@media (max-width: 1200px) {
  .showcase {
    padding: 50px 60px;
  }

  .showcase-title {
    font-size: 42px;
  }

  .showcase-image {
    width: 380px;
    right: 60px;
  }
}

@media (max-width: 968px) {
  .showcase {
    height: 300px;
    padding: 40px;
  }

  .showcase-title {
    font-size: 36px;
  }

  .showcase-subtitle {
    font-size: 16px;
  }

  .showcase-image {
    width: 320px;
    right: 40px;
  }
}

@media (max-width: 768px) {
  .showcase {
    height: auto;
    min-height: 280px;
    padding: 40px 30px;
  }

  .showcase-content {
    max-width: 100%;
  }

  .showcase-title {
    font-size: 28px;
  }

  .showcase-subtitle {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .newsletter-form {
    flex-direction: column;
    gap: 10px;
  }

  .subscribe-button {
    width: 100%;
  }

  .showcase-image {
    display: none;
  }
}
</style>
