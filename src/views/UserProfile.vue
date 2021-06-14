<template>
  <div class="grid-container">
    <div class="myProfile">Мой профиль</div>
    <div class="image">
      <img width="100" height="100" :src="userAvatar" alt="Фото профиля" />
      <input class="inputImg" type="file" ref="avatar" @change="changeAvatar" />
      <v-btn
        class="deleteAvatar"
        fab
        max-height="20px"
        max-width="20px"
        x-small
        color="error"
        @click="deleteAvatar"
        v-show="user.avatar && Object.keys(user.avatar).length"
        ><v-icon size="12">mdi-delete</v-icon></v-btn
      >
    </div>
    <div class="fio">
      <v-text-field
        append-icon="mdi-account-box"
        type="text"
        outlined
        label="ФИО"
        v-model.trim="userForm.fullName"
        small
      ></v-text-field>
    </div>
    <div class="phone">
      <v-text-field
        append-icon="mdi-phone"
        type="text"
        outlined
        label="Телефон"
        v-mask="'+# (###) ###-##-##'"
        v-model.trim="userForm.phone"
        small
      ></v-text-field>
    </div>
    <div class="mail">
      <v-text-field
        append-icon="mdi-email"
        type="text"
        outlined
        label="E-mail"
        v-model.trim="userForm.email"
        small
      ></v-text-field>
    </div>
    <div class="address">
      <v-text-field
        append-icon="mdi-home"
        type="text"
        outlined
        label="Адрес"
        v-model.trim="userForm.address"
        small
      ></v-text-field>
    </div>
    <div class="change">
      <v-btn
        @click="changeInfo"
        type="submit"
        color="success"
        elevation="2"
        large
        outlined
      >
        Изменить
      </v-btn>
    </div>
    <div class="active">
      <span class="spanAct">Активные заказы:</span>
    </div>
    <div class="history">
      <span class="spanHist">История заказов:</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      userForm: {},
    };
  },
  async created() {
    await this.getUserInfo();
    this.userForm = this.user;
    this.userForm.phone = this.$options.filters.phoneFilter(
      this.userForm.phone
    );
  },
  computed: {
    ...mapState({ user: (state) => state.profile.userInfo }),
    userAvatar() {
      if (!this.user.avatar?.img) {
        return require("@/assets/img/no_avatar.png");
      }
      return `data:image/${this.user.avatar.type};base64,${this.user.avatar.img}`;
    },
  },
  methods: {
    ...mapActions([
      "getUserInfo",
      "changeProfile",
      "uploadAvatar",
      "deleteProfileAvatar",
    ]),
    async changeAvatar() {
      const formData = new FormData();
      formData.append("avatar", this.$refs.avatar.files[0]);
      try {
        await this.uploadAvatar(formData);
      } catch (error) {}
    },
    async deleteAvatar() {
      try {
        await this.deleteProfileAvatar();
      } catch (error) {}
    },
    async changeInfo() {
      try {
        await this.changeProfile(this.userForm);
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss">
.grid-container {
  display: grid;
  max-height: 90vh;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 1fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 2.4fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . . . . . . . . ."
    ". myProfile myProfile myProfile . active active active . history history history ."
    ". . image . . active active active . history history history ."
    ". fio fio fio . active active active . history history history ."
    ". phone phone phone . active active active . history history history ."
    ". mail mail mail . . . . . . . . ."
    ". address address address . . . . . . . . ."
    ". change change change . . . . . . . . ."
    ". . . . . . . . . . . . ."
    ". . . . . . . . . . . . .";
}

.myProfile {
  grid-area: myProfile;
  font-size: 40pt;
  font-weight: bold;
}
.image {
  grid-area: image;
  margin-bottom: 20px;
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  img {
    border-radius: 50%;
    object-fit: cover;
  }
  .deleteAvatar {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
.inputImg {
  position: absolute;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}
.active {
  grid-area: active;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 5px 11px 13px 2px rgba(lightBlue, 0.5);
  overflow-y: scroll;
}
.spanAct {
  margin-left: 60px;
  font-size: 20pt;
  font-weight: bold;
}
.history {
  grid-area: history;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 5px 11px 13px 2px rgba(lightBlue, 0.5);
  overflow-y: scroll;
}
.spanHist {
  margin-left: 60px;
  font-size: 20pt;
  font-weight: bold;
}
.fio {
  grid-area: fio;
}
.phone {
  grid-area: phone;
}
.mail {
  grid-area: mail;
}
.address {
  grid-area: address;
}
.change {
  grid-area: change;
  margin-left: 100px;
}
</style>