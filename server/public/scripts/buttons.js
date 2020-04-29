const languages = {

  translate(language){
    document.querySelector('.signInDiv > h1').innerHTML = language.signIn;
    document.querySelector('.createAccountDiv > h1').innerHTML = language.createAccount;
    document.querySelector('input[name="email"]').placeholder = language.email;
    document.querySelector('input[name="age"]').placeholder = language.age;
    document.querySelector('input[name="country"]').placeholder = language.country;
    document.querySelector('input[name="nickName"]').placeholder = language.nickName;
    document.querySelector('input[name="city"]').placeholder = language.city;
    document.querySelector('input[name="password"]').placeholder = language.password;
    document.querySelector('input[name="confPassword"]').placeholder = language.confPassword;
    document.querySelector('input[name="currentPassword"]').placeholder = language.currentPassword;
    document.querySelector('input[name="newPassword"]').placeholder = language.newPassword;
    document.querySelector('input[name="confNewPassword"]').placeholder = language.confNewPassword;
    document.querySelector('input[name="newEmail"]').placeholder = language.newEmail;
    document.querySelector('input[name="changeNickName"]').placeholder = language.nickName;
    document.querySelector('input[name="changeAge"]').placeholder = language.age;
    document.querySelector('input[name="changeCountry"]').placeholder = language.country;
    document.querySelector('input[name="changeCity"]').placeholder = language.city;
    document.querySelector('button.signIn').innerHTML = language.signIn;
    document.querySelector('button.createNewAccount').innerHTML = language.create;
    document.querySelector('button.cancel').innerHTML = language.cancel;
    document.querySelector('button.create').innerHTML = language.create;
    document.querySelector('input.searchFriendInput').placeholder = language.findNewFriend;
    document.querySelector('div.changePassword').innerHTML = language.changePassword;
    document.querySelector('div.changeEmail').innerHTML = language.changeEmail;
    document.querySelector('div.personalData').innerHTML = language.changePersonalData;
    document.querySelector('p.infoText').innerHTML = language.infoText;
    document.querySelector('div.deleteAccount').innerHTML = language.deleteAccount;
    document.querySelector('form.deleteAccount > input').placeholder = language.password;
    document.querySelector('form.deleteAccount > button').innerHTML = language.delete;
    document.querySelector('form.createRoomForm > h1').innerHTML = language.createRoom;
    document.querySelector('form.createRoomForm > input[name="roomName"]').placeholder = language.roomName;
    document.querySelector('form.createRoomForm > input[name="pin"]').placeholder = language.pin;
    document.querySelector('form.createRoomForm > button.addFinish').innerHTML = language.addFinishPoint;
    document.querySelector('form.createRoomForm > button[type="submit"]').innerHTML = language.roomCreate;
    document.querySelector('button.addFinishComplate').innerHTML = language.select;


    let save = document.querySelectorAll('button[name="changeButton"]').forEach(button => {
      button.innerHTML = language.save;
    });

  },

  Arm: {
    emailUsedError: "էլեկտրոնային հասցեն զբաղված է",
    wrongError: "տվյալների անհամապատասխանեցում",
    signIn: "Մուտք",
    email: "էլեկտրոնային Հասցե",
    password: "Գաղտնաբառ",
    confPassword: "Կրկնել գաղտնաբառը",
    create: "Գրանցվել",
    createAccount: "Գրանցվել",
    cancel: "Չեղարկել",
    infoText: "Ստեղծագործության տեքստը օգտագործվում է գրաֆիկական դիզայներների, ծրագրավորողների եւ տպիչների կողմից `կայքի զբաղեցրած տարածքի, գովազդային արտադրանքի կամ խմբագրական արտադրության նպատակով, որի վերջնական տեքստը դեռ պատրաստ չէ:",
    findNewFriend: "Գտնել Ընկերներ",
    changePassword: "Գաղտնաբառ",
    changeEmail: "էլեկտրոնային Հասցե",
    changePersonalData: "Անձնական Տվյալներ",
    currentPassword: "Ներկա Գաղտնաբառը",
    newPassword: "Նոր Գաղտնաբառը",
    confNewPassword: "Կրկնել Նոր Գաղտնաբառը",
    newEmail: "Նոր Էլ-հասցե",
    nickName: "Մականուն",
    age: "Տարիք",
    country: "Երկիր",
    city: "Քաղաք",
    save: "Ուղարկել",
    delete: 'Ջնջել',
    deleteAccount: 'Ջնջել էջը',
    createRoom: 'Ստեղծել սենյակ',
    pin: 'Պին կոդ',
    addFinishPoint: 'Ավելացնել նպատակակետ',
    roomCreate: 'Ստեղծել',
    roomName: 'Սենյակի Անվանում',
    select: 'Ընտրել'

  },

  Rus: {
    emailUsedError: "адрес электронной почты занят",
    wrongError: "неправильный эл-почта / пароль",
    signIn: "Вход",
    email: "Электронная почта",
    password: "Пароль",
    confPassword: "Повторить Пароль",
    create: "Создать",
    createAccount: "Регистрация",
    cancel: "Отмена",
    infoText: "Пасдийсаиднасидн йсадиасд сахдисадхисий йсднсайд асйднсайднса йсадйсад садйбасйднса дйсандйса днсаднйсандсадйнс дасйдн",
    findNewFriend: "Найти Друзей",
    changePassword: "Смена Пароля",
    changeEmail: "Смена эл-почты",
    changePersonalData: "Личные данные",
    currentPassword: "Текущий Пароль",
    newPassword: "Новый Пароль",
    confNewPassword: "Повторить Пароль",
    newEmail: "Новая эл-почта",
    nickName: "Ник-Нейм",
    age: "Возрост",
    country: "Страна",
    city: "Город",
    save: "Отправка",
    delete: 'Удалить',
    deleteAccount: 'Удалить аккаунт',
    createRoom: 'Создать Комнату',
    pin: 'Пин код',
    addFinishPoint: 'Добавить Точку Финиша',
    roomCreate: 'Создать',
    roomName: 'Названия Комнаты',
    select: 'Выбрать'


  },

  Eng: {
    emailUsedError: "Email Busy",
    wrongError: "Wrong email or password",
    signIn: "Sign In",
    email: "Email",
    password: "Password",
    confPassword: "Confirm Password",
    create: "Create",
    createAccount: "Create Account",
    cancel: "Cancel",
    infoText: "So perhaps, you've generated some fancy text, and youre content that you can now nny cat videos, but perhaps yous even poss",
    findNewFriend: "Find New Friend",
    changePassword: "Change Password",
    changeEmail: "Change Email",
    changePersData: "Change Personal Data",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confNewPassword: "Confirm New Password",
    newEmail: "New Email",
    nickName: "Nick-Name",
    age: "Age",
    country: "Country",
    city: "City",
    save: "Save",
    delete: 'Delete',
    deleteAccount: 'Delete Account',
    createRoom: 'Create Room',
    pin: 'PIN',
    addFinishPoint: 'Add Finish',
    roomCreate: 'create',
    roomName: 'Room Name',
    select: 'Select'


  }

};

const conteiner = {
  layer: document.querySelector('.conteiner')
};

const conteinerLayer = {
    layer: document.querySelector('.conteinerLayer'),
    change(){
      if (this.layer.dataset.active == "false") this.show();
      else this.hide();
    },
    show() {
      conteiner.layer.style.position = "fixed";

      this.layer.setAttribute('data-active', "true");
      this.layer.style.display = "block";
      this.layer.addEventListener('click', () => {
        buttons.menuButton.deActivated();
        buttons.searchButton.deActivated();
        buttons.languageButton.deActivated();
        this.hide();
      });
    },
    hide(){
      conteiner.layer.style.position = "absolute";

      this.layer.setAttribute('data-active', "false");
      this.layer.style.display = "none";

    }
};

document.querySelector('.logOutButton').addEventListener('click', () => {
  buttons.menuButton.click();
});

const buttons = {

  closeErrorButton: {

    errorLayer: document.querySelector('.errorLayer'),

    click(){
      this.errorLayer.style.display = "none";
    }
  },

  authenticationButton: {
    click(button){
      document.querySelectorAll('.authen').forEach(div => {
        div.style.display = 'none';
      });
      document.querySelectorAll('div.authenticationDiv input').forEach(input => {
        input.value = "";
        input.classList.remove('validation');
      });
      document.querySelector(`.${button.id}`).style.display = "block";
    }
  },

  menuButton: {
    button: document.querySelector('.menuButton'),
    menu: document.querySelector('.menuDiv'),

    click(){

      if (this.button.dataset.active == "false") this.activated();
      else this.deActivated();
    },

    activated(){

      buttons.accountUpdateButton.deActivateAll();
      buttons.changePictureButton.deActivated();
      buttons.playButton.deActivated();
      conteinerLayer.show();

      if (document.querySelector('.room').style.display === 'block')
        document.querySelector('.roomExit').classList.add('activeRoomExit');

      this.button.setAttribute('data-active', 'true');
      this.button.classList.add("activeMenuButton");
      this.menu.classList.add("activeMenuDiv");
    },

    deActivated(){
      buttons.languageButton.deActivated();
      buttons.searchButton.deActivated();
      conteinerLayer.hide();

      document.querySelector('div.roomEnterDiv').style.display = 'none';
      document.querySelector('.roomExit').classList.remove('activeRoomExit');

      this.button.setAttribute('data-active', 'false');
      this.button.classList.remove("activeMenuButton");
      this.menu.classList.remove("activeMenuDiv");
    }
  },

  playPageButton: {

    button: document.querySelector('.playPageDiv'),

    click(){

      buttons.menuButton.deActivated();
      buttons.languageButton.deActivated();

      document.querySelectorAll('.conteiner > div.page').forEach(page => {
        page.style.display = "none";
        page.setAttribute('data-active', 'false');

      });
      buttons.searchButton.deActivated();

      this.button.parentElement.classList.remove("activePlayPageDiv");
      if (this.button.dataset.room === 'true'){
        document.querySelector(`.room`).style.display = "block";
        // document.querySelector('.roomExit').style.display = 'block';
      }
      else {
        document.querySelector(`.${this.button.id}`).style.display = "block";
      }

      this.deActivated();

    },

    activated(){
      this.button.classList.add("activePlayPageDiv");
    },

    deActivated(){
      this.button.classList.remove("activePlayPageDiv");

    }

  },

  searchButton: {
    button: document.querySelector('.searchButton'),
    form: document.querySelector('.searchFriendForm'),
    page: document.querySelector('.search'),

    click(){
      if (this.form.dataset.active == "false") this.activated();
      else this.deActivated();
    },

    activated(){
      this.form.setAttribute('data-active', 'true');
      this.form.classList.add('activeSearchFriendForm');
      this.form.addEventListener('click', () => {

        buttons.playPageButton.activated();
        document.querySelectorAll('.conteiner > div.page').forEach(page => {
          page.style.display = "none";
          page.setAttribute('data-active', 'false');
        });

        this.page.style.display = "block";
        buttons.menuButton.deActivated();

      });
    },

    deActivated(){
      if (this.page.style.display != "block") {

        this.form.setAttribute('data-active', 'false');
        this.form.classList.remove('activeSearchFriendForm');

      }

    }
  },

  playButton: {
    button: document.querySelector('.playButton'),
    createRoomButton: {
      button: document.querySelector('.createRoomButton'),
      click(){
        document.querySelector('.createRoomDiv').style.display = 'flex';
        buttons.playButton.deActivated();
        document.querySelector('.createRoomCancel').onclick = () => {
          document.querySelector('.createRoomDiv').style.display = 'none';
        };
        document.querySelector('.addFinish').onclick = () => {
          document.querySelector('.createRoomMap').style.display = 'block';
        }

      }
    },
    findRoomButton: {
      button: document.querySelector('.findRoomButton')
    },

    click(){
      if (this.button.dataset.active == "false") this.activated();
      else this.deActivated();
    },

    activated(){
      this.button.setAttribute('data-active', 'true');
      this.button.classList.add('activeButton');

      this.createRoomButton.button.classList.add("activeCreateRoomButton");
      this.findRoomButton.button.classList.add("activeFindRoomButton");
    },

    deActivated(){
      this.button.setAttribute('data-active', 'false');
      this.button.classList.remove('activeButton');

      this.createRoomButton.button.classList.remove("activeCreateRoomButton");
      this.findRoomButton.button.classList.remove("activeFindRoomButton");

    }
  },

  changePictureButton: {
    button: document.querySelector('.changeProfilePicture'),
    cameraButton: document.querySelector(`.changeProfilePicture > .camera`),
    uploadButton: document.querySelector(`.changeProfilePicture > .upload`),
    deleteButton: document.querySelector(`.changeProfilePicture > .delete`),

    click(){
      if (this.button.dataset.active == "false") this.activated();
      else this.deActivated();
    },

    activated(){
      buttons.accountUpdateButton.deActivateAll();

      this.button.setAttribute('data-active', 'true');
      this.cameraButton.classList.add('activeCamera');
      this.deleteButton.classList.add('activeDelete');
    },

    deActivated(){
      this.button.setAttribute('data-active', 'false');
      this.cameraButton.classList.remove('activeCamera');
      this.deleteButton.classList.remove('activeDelete');
    }
  },

  accountUpdateButton: {

    click(button){
      if (button.dataset.active == 'false') this.activated(button);
      else this.deActivated(button);
    },

    activated(button){

      // document.querySelectorAll('div.settingsItems button').forEach(button => {
      //   console.log(button);
      //   button.addEventListener('click', () => {
      //     this.deActivateAll();
      //   });
      // });

      buttons.changePictureButton.deActivated();
      document.querySelectorAll('div.settingsItems  input').forEach(input => {
        input.value = "";
        input.classList.remove('validation');
      });

      document.querySelectorAll(`.settingsItems > div.accountUpdate`).forEach(item => {
        this.deActivated(item);
      });

      button.setAttribute('data-active', 'true');
      document.querySelector(`form.${button.id}`).classList.add('activeAccountUpdates');

    },

    deActivated(button){

      button.setAttribute('data-active', 'false');
      document.querySelector(`form.${button.id}`).classList.remove('activeAccountUpdates')

    },

    deActivateAll(){
      document.querySelectorAll(`.settingsItems > div.accountUpdate`).forEach(item => {
        this.deActivated(item);
      });
    }
  },

  languageButton: {
    button: document.querySelector('.languageButton'),
    armButton: document.querySelector('.armFlag'),
    rusButton: document.querySelector('.rusFlag'),
    engButton: document.querySelector('.engFlag'),

    click(){
      if (this.button.dataset.active == 'false') this.activated();
      else this.deActivated();
    },

    activated(){
      this.button.setAttribute('data-active', 'true');
      this.armButton.classList.add('activeArmFlag');
      this.rusButton.classList.add('activeRusFlag');
      this.engButton.classList.add('activeEngFlag');
    },

    deActivated(){
      this.button.setAttribute('data-active', 'false');
      this.armButton.classList.remove('activeArmFlag');
      this.rusButton.classList.remove('activeRusFlag');
      this.engButton.classList.remove('activeEngFlag');
    },

    selectLanguage(button){
      document.querySelectorAll('.flag').forEach(flag => {
        flag.setAttribute('data-active', 'false');
      });
      button.setAttribute('data-active', 'true');
      eval(`languages.translate(languages.${button.id})`);
      this.button.style.backgroundImage = `url('css/img/icon${button.id}Flag.png')`;
      this.deActivated();

    }

  },

  otherButton: {

    click(button){

      document.querySelectorAll('.conteiner > div.page').forEach(page => {
        page.style.display = "none";
        page.setAttribute("data-active", 'false');
      });

      buttons.accountUpdateButton.deActivateAll();
      buttons.changePictureButton.deActivated();
      buttons.menuButton.deActivated();
      buttons.searchButton.deActivated();
      buttons.languageButton.deActivated();


      buttons.playPageButton.activated();
      document.querySelector(`.${button.id}`).style.display = "block";
      document.querySelector(`.${button.id}`).setAttribute('data-active', 'true');
    }

  },

  friendAction: {

    click(button){

      const parentId = button.parentElement.id;
      if (button.dataset.active == 'false') {

        document.querySelector(`#${parentId} > div.confirmAction`).classList.add('activeConfirmAction');
        document.querySelector(`#${parentId} > div.playerActionLayer`).style.display = 'flex'
        button.setAttribute('data-active', 'true');

      }
      else {

        document.querySelector(`#${parentId} > div.confirmAction`).classList.remove('activeConfirmAction');
        document.querySelector(`#${parentId} > div.playerActionLayer`).style.display = 'none';

        button.setAttribute('data-active', 'false');
      }
    }
  }

};
