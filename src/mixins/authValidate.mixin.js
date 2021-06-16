import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    //Form validation computed properties
    invalidEmail() {
      if (
        this.$v.formData.email.$dirty &&
        (!this.$v.formData.email.emailAddress ||
          !this.$v.formData.email.required)
      ) {
        return this.validationErrors.invalidEmail;
      }
    },
    invalidPassword() {
      if (
        this.$v.formData.password.$dirty &&
        !this.$v.formData.password.required
      ) {
        return this.validationErrors.required;
      } else if (
        this.$v.formData.password.$dirty &&
        !this.$v.formData.password.minLength &&
        "minLength" in this.$v.formData.password
      ) {
        return this.validationErrors.invalidMinLength;
      }
    },
    invalidFirstName() {
      if (
        this.$v.formData.firstName.$dirty &&
        !this.$v.formData.firstName.required
      ) {
        return this.validationErrors.required;
      }
    },
    invalidLastName() {
      if (
        this.$v.formData.lastName.$dirty &&
        !this.$v.formData.lastName.required
      ) {
        return this.validationErrors.required;
      }
    },
    invalidPhone() {
      if (this.$v.formData.phone.$dirty && !this.$v.formData.phone.required) {
        return this.validationErrors.required;
      }
    },
    invalidPasswordConfirmed() {
      if (
        this.$v.formData.passwordConfirmed.$dirty &&
        !this.$v.formData.passwordConfirmed.sameAs
      ) {
        return this.validationErrors.invalidPasswordConfirmation;
      } else if (
        this.$v.formData.passwordConfirmed.$dirty &&
        !this.$v.formData.passwordConfirmed.required
      ) {
        return this.validationErrors.required;
      }
    },
    invalidRulesAgreement() {
      if (
        this.$v.formData.rulesAgreement.$dirty &&
        !this.$v.formData.rulesAgreement.sameAs
      ) {
        return this.validationErrors.required;
      }
    },
    //mapping root state
    ...mapState({
      validationErrors: (state) => state.validationErrors,
      responseErrors: (state) => state.responseErrors,
    }),
  },
  methods: {
    ...mapMutations(["RESET_ERROR"]),
  },
  //Reset error before current route leave
  beforeRouteLeave(_, __, next) {
    this.RESET_ERROR();
    next();
  },
};
