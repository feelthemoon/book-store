<template>
  <v-form class="d-flex flex-column align-center form pl-4 pr-4">
    <div class="form__inner">
      <h2 class="mb-8 text-center">Авторизация</h2>
      <v-text-field
        append-icon="mdi-email"
        type="email"
        v-model="formData.email"
        :class="{
          invalid: invalidEmail || responseErrors.hasOwnProperty('email'),
        }"
        :error-messages="invalidEmail || responseErrors.email"
        outlined
        label="Email"
      ></v-text-field>
      <v-text-field
        append-icon="mdi-lock"
        type="password"
        v-model="formData.password"
        :class="{
          invalid: invalidPassword || responseErrors.hasOwnProperty('email'),
        }"
        :error-messages="invalidPassword"
        outlined
        label="Пароль"
      >
      </v-text-field>
      <v-checkbox
        label="Запомнить меня"
        v-model="formData.rememberMe"
        class="mt-0"
      ></v-checkbox>
      <v-btn
        class="btn-auth mb-2"
        @click.prevent="onLoginUser"
        type="submit"
        color="primary"
      >
        Войти
      </v-btn>
      <div class="text-center">
        <span class="form__link">Нет аккаунта? </span>
        <router-link to="/register" class="form__link"
          >Зарегистрируйтесь!</router-link
        >
      </div>
    </div>
  </v-form>
</template>
<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email as emailAddress } from "vuelidate/lib/validators";
import authValidateMixin from "@/mixins/authValidate.mixin";
export default {
  mixins: [validationMixin, authValidateMixin],
  data() {
    return {
      //Form data for login
      formData: {
        email: "",
        password: "",
        rememberMe: false,
      },
    };
  },
  validations: {
    formData: {
      email: {
        emailAddress,
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    //Click handler for login
    async onLoginUser() {
      try {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          await this.loginUser(this.formData);
          await this.$router.push({ name: "Books" });
        }
      } catch (error) {}
    },
    ...mapActions(["loginUser"]),
  },
};
</script>
