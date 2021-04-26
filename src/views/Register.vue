<template>
  <v-form class="d-flex flex-column align-center form register pl-4 pr-4">
    <div class="form__inner">
      <h2 class="mb-8 text-center">Регистрация</h2>
      <div class="form__row">
        <v-text-field
          append-icon="mdi-account-box"
          type="text"
          v-model="formData.firstName"
          :class="{
            invalid: invalidFirstName,
            'mr-5': !$vuetify.breakpoint.xs,
          }"
          :error-messages="invalidFirstName"
          outlined
          label="Имя"
        ></v-text-field>
        <v-text-field
          append-icon="mdi-account-box-outline"
          type="text"
          v-model="formData.lastName"
          :class="{ invalid: invalidLastName }"
          :error-messages="invalidLastName"
          outlined
          label="Фамилия"
        >
        </v-text-field>
      </div>
      <div class="form__row">
        <v-text-field
          append-icon="mdi-email"
          type="email"
          v-model="formData.email"
          :class="{
            invalid: invalidEmail || responseErrors.hasOwnProperty('email'),
            'mr-5': !$vuetify.breakpoint.xs,
          }"
          :error-messages="invalidEmail || responseErrors.email"
          outlined
          label="Email"
        ></v-text-field>
        <v-text-field
          append-icon="mdi-cellphone"
          type="text"
          v-mask="'+7 (###) ###-##-##'"
          v-model="formData.phone"
          :class="{
            invalid: invalidPhone || responseErrors.hasOwnProperty('phone'),
          }"
          :error-messages="invalidPhone || responseErrors.phone"
          outlined
          label="Моб.телефон"
        >
        </v-text-field>
      </div>
      <div class="form__row">
        <v-text-field
          append-icon="mdi-lock"
          type="password"
          v-model="formData.password"
          :class="{ invalid: invalidPassword, 'mr-5': !$vuetify.breakpoint.xs }"
          :error-messages="invalidPassword"
          outlined
          label="Пароль"
        ></v-text-field>
        <v-text-field
          append-icon="mdi-lock-reset"
          type="password"
          v-model="formData.passwordConfirmed"
          :class="{ invalid: invalidPasswordConfirmed }"
          :error-messages="invalidPasswordConfirmed"
          outlined
          label="Повторите пароль"
        >
        </v-text-field>
      </div>
      <v-checkbox
        label="Я даю согласие на обработку персональных данных"
        v-model="formData.rulesAgreement"
        :error-messages="invalidRulesAgreement"
        class="mt-0"
      ></v-checkbox>
      <v-btn
        @click.prevent="onRegisterUser"
        type="submit"
        color="primary"
        class="mt-3 btn-auth mb-2"
      >
        Зарегистрироваться
      </v-btn>
      <div class="text-center">
        <span class="form__link">Есть аккаунт? </span>
        <router-link to="/" class="form__link">Авторизуйтесь!</router-link>
      </div>
    </div>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import {
  required,
  email as emailAddress,
  minLength,
  sameAs,
  maxLength,
} from "vuelidate/lib/validators";
import authValidateMixin from "@/mixins/authValidate.mixin";

export default {
  mixins: [validationMixin, authValidateMixin],
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmed: "",
        rulesAgreement: false,
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
        minLength: minLength(8),
        maxLength: maxLength(255),
      },
      firstName: {
        required,
        maxLength: maxLength(255),
      },
      lastName: {
        required,
        maxLength: maxLength(255),
      },
      phone: {
        required,
      },
      passwordConfirmed: {
        required,
        sameAs: sameAs(function () {
          return this.formData.password;
        }),
      },
      rulesAgreement: {
        sameAs: sameAs(function () {
          return true;
        }),
      },
    },
  },

  methods: {
    async onRegisterUser() {
      try {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          await this.registerUser({
            ...this.formData,
            phone: this.formData.phone.replaceAll(/[\s\\()+-]/gm, ""),
          });
        }
      } catch (error) {}
    },
    ...mapActions(["registerUser"]),
  },
};
</script>
<style lang="scss">
.form {
  &__row {
    display: flex;
    justify-content: space-between;
    @media (max-width: 599px) {
      flex-direction: column;
    }
  }
}
</style>