const domain = '';

const language = {
  arm: {
    //notifications
    signIn: 'մուտքը',
    createAccount: 'էջը ստեղծված է',
    profilePictureChanged: 'պրոֆիլի նկարը թարչմացված է',
    passwordChanged: 'գաղտնաբառը թարմացվաշ է',
    emailChanged: 'էլ-հասցեն թարմացված է',
    dataChanged: 'տվյալները թարմացված են',
    removeFromFriends: 'ըկերների ցանկից հեռացված է',
    requestRejected: 'մերժված է',
    requestAccepted: 'ընդունված է',
    noResults: 'ոչ մի արդյուք',
    requestSent: 'ուղարկված է',
    accountDeleted: 'Էջը ջնջված է',
    addFinish: 'նպատակակետը բացակայում է',
    createRoom: 'սենյակը ստեղծված է',
    //account Status
    itIsMe: "Ես եմ",
    inYourFriends: "Ընկեր",
    acceptFriendRequest: "Ընդունել",
    friendRequestSent: "Հրավերը ուղարկված է",
    sendFriendRequest: "Ուղարկել հրավեր",
    //errors
    wrongPassword: 'Գաղտնաբառը սխալ է',
    emailUsed: 'Էլեկտրոնային հասցեն զբաղված է',
    wrongPin: "Պին կոդը սխալ է"

  },

  eng: {
    //notifications
    signIn: 'login successful',
    createAccount: 'account created',
    profilePictureChanged: 'profile picture changed',
    passwordChanged: 'password changed',
    emailChanged: 'email changed',
    dataChanged: 'data changed',
    removeFromFriends: 'removed from friends',
    requestRejected: 'request rejected',
    requestAccepted: 'request accepted',
    noResults: 'no results',
    requestSent: 'request sent',
    accountDeleted: 'account deleted',
    addFinish: 'add finish point',
    createRoom: 'room created',

    //account Status
    itIsMe: "It is me",
    inYourFriends: "He's on your friends list",
    acceptFriendRequest: "Accept friend request",
    friendRequestSent: "Request has already been sent",
    sendFriendRequest: "Send friend request",
    //errors
    wrongPassword: 'Password is wrong',
    emailUsed: 'Email is used',
    wrongPin: "PIN is wrong"





  },

  rus: {
    //notifications
    signIn: 'вход',
    createAccount: 'аккаут создан',
    profilePictureChanged: 'фото профиля изменена',
    passwordChanged: 'пароль изменён',
    emailChanged: 'эл-почта изменена',
    dataChanged: 'данные изменены',
    removeFromFriends: 'удалён из друзей',
    requestRejected: 'запрос отклонён',
    requestAccepted: 'запрос принят',
    noResults: 'результат не найден',
    requestSent: 'запрос отправлен',
    accountDeleted: 'аккаунт удалён',
    addFinish: 'добавить точку финиша',
    createRoom: 'комната создана',

    //account Status
    itIsMe: "Мой аккаунт",
    inYourFriends: "Мой друг",
    acceptFriendRequest: "Принять запрос",
    friendRequestSent: "Запрос отправлен",
    sendFriendRequest: "Отправить запрос",
    //errors
    wrongPassword: 'Неверный пароль',
    emailUsed: 'Электронная почта занята',
    wrongPin: "Неверный ПИН код"

  },

  current: {},

};

language.current = language.eng;
document.querySelector('#Arm').addEventListener('click', () => {
  language.current = language.arm
});

document.querySelector('#Rus').addEventListener('click', () => {
  language.current = language.rus
});

document.querySelector('#Eng').addEventListener('click', () => {
  language.current = language.eng
});



document.querySelector('#account').addEventListener('click',() => {
  requestButtonRender();


  friend.friends.loaded = 0;
  document.querySelector('div.friendList').innerHTML = "";
  friend.friends.render();

});

document.querySelector('#friendRequests').addEventListener('click',() => {
  document.querySelector('div.friendRequestList').innerHTML = "";
  friend.friendRequests.loaded = 0;
  friend.friendRequests.render();

});

document.querySelector('input.searchFriendInput').addEventListener('change', () => {
  this.results = Infinity;
  document.querySelector('div.searchResultList').innerHTML = "";
});

document.querySelector('form.searchFriendForm').addEventListener('submit', () => {
  this.results = Infinity;
  document.querySelector('div.searchResultList').innerHTML = "";
});

function notification(string){
  let notification = document.querySelector('.notification');
  notification.innerHTML = string;
  notification.classList.add('activeNotification');

  setTimeout(() => {
    notification.classList.remove('activeNotification');
  },3000);

}


const account = {

  entered: false,

  owner: {},

  authentication(){
    if (this.entered) {

      socketConnection(domain);
      document.querySelector('.authenticationDiv').style.display = "none";
      document.querySelector('div.accountInfo > h1').innerHTML =
      `${account.owner.nickName} (${account.owner.age}) <br><span>${account.owner.country} ${account.owner.city}</span>`;
      document.querySelector('div.accountInfo > p').innerHTML = `${account.owner.email}`;

      document.querySelectorAll('div.page').forEach(page => {
        page.style.display = 'none';
      });
      document.querySelector('div.play').style.display = 'block';
      document.querySelectorAll('.avatarka').forEach(avatarka => {
        avatarka.style.backgroundImage = `url('${account.owner.profilePicture}')`;
      });
    }
    else {
      document.querySelector('.authenticationDiv').style.display = "flex";

      this.owner = {};
    }
  },

  signIn: {
    form: {},
    inputs: document.querySelectorAll('.signInForm > input'),
    createReq(){
      this.inputs.forEach(input => {
        this.form[input.name] = input.value;
      });
    },
    sendReq(){

      this.createReq();
      sendRequest("post", `${domain}/signIn`, this.form)
      .then(res => {
        if (res.entered) {
          account.owner = res.body;
          account.entered = true;


          account.authentication();
          notification(language.current.signIn);

          this.form = {};
        }
        else {
          document.querySelector('.errorWindow > p').innerHTML = language.current[res.body];
          document.querySelector('.errorLayer').style.display = "block";
        }
      })
      .catch(err => console.log(err));
    }
  },

  createAccount: {
    form: {},
    inputs: document.querySelectorAll('.createAccountForm > input'),
    createReq(){
      this.inputs.forEach(input => {
        this.form[input.name] = input.value;
      });
    },
    sendReq(){
      this.createReq();
      if (this.form.password !== this.form.confPassword) {
        document.querySelector('#confPassword').classList.add('invalidation');
        document.querySelector('form.createAccountForm > button[type = "submit"]').disabled = true;
        document.querySelector('#confPassword').addEventListener('keyup', () => {
          document.querySelector('#confPassword').classList.remove('invalidation');
          document.querySelector('form.createAccountForm > button[type = "submit"]').disabled = false;

        });
        document.querySelector('#password').addEventListener('keyup', () => {
          document.querySelector('#confPassword').classList.remove('invalidation');
          document.querySelector('form.createAccountForm > button[type = "submit"]').disabled = false;

        });
        return;
      }
      document.querySelector('#confPassword').classList.remove('invalidation');

      sendRequest("put", `${domain}/createAccount`, this.form)
      .then(res => {
        if (res.created) {
          document.querySelector('.createAccountDiv').style.display = "none";
          document.querySelector('.signInDiv').style.display = "block";
          notification(language.current.createAccount);
          this.form = {};
        }
        else {
          document.querySelector('.errorWindow > p').innerHTML = language.current[res.body];
          document.querySelector('.errorLayer').style.display = "block";
        }
      })
      .catch(err => console.log(err));
    }
  },

  changePassword: {

    form: {},

    inputs: document.querySelectorAll('form.changePassword > input'),

    createReq(){

      this.inputs.forEach(input => {
        if(input.name !== 'confNewPassword')
          this.form[input.name] = input.value;
      });
      this.form.id = account.owner.id;
    },

    sendReq(){
      this.createReq();
      if (this.form.newPassword !== document.querySelector('#confNewPassword').value) {
        document.querySelector('#confNewPassword').classList.add('invalidation');
        document.querySelector('form.changePassword > button[type = "submit"]').disabled = true;
        document.querySelector('#confNewPassword').addEventListener('keyup', () => {
          document.querySelector('#confNewPassword').classList.remove('invalidation');
          document.querySelector('form.changePassword > button[type = "submit"]').disabled = false;
        });
        document.querySelector('#newPassword').addEventListener('keyup', () => {
          document.querySelector('#confNewPassword').classList.remove('invalidation');
          document.querySelector('form.changePassword > button[type = "submit"]').disabled = false;
        });
        return;
      }

      sendRequest('put', `${domain}/changePassword`, this.form)
      .then(res => {
        if (res.changed) {

          notification(language.current.passwordChanged);

          this.form = {};

        }
        else {
          document.querySelector('.errorWindow > p').innerHTML = language.current[res.body];
          document.querySelector('.errorLayer').style.display = "block";

        }
      })
      .catch(err => {
        throw err;
      });

    }

  },

  changeEmail(){
    let form = {
      id: account.owner.id,
      newEmail: document.querySelector('form.changeEmail > input').value
    };
      sendRequest('put',`${domain}/changeEmail`,form)
      .then(res => {
        if (res.changed) {

          notification(language.current.emailChanged);
          account.owner.email = res.body.email;
          account.authentication();
          form = {};

        }
        else {

          document.querySelector('.errorWindow > p').innerHTML = language.current[res.body];
          document.querySelector('.errorLayer').style.display = "block";

        }
      })
      .catch(err => {
        throw err;
      });

  },

  changePersonalData: {
    form: {},
    inputs: document.querySelectorAll('form.personal > input'),
    createReq(){
      this.inputs.forEach(input => {
        this.form[input.name] = input.value;
      });
      this.form.id = account.owner.id;
    },
    sendReq(){
      this.createReq();

      sendRequest('put', `${domain}/changePersonalData`, this.form)
      .then(res => {

        account.owner.nickName = res.body.nickName;
        account.owner.age = res.body.age;
        account.owner.country = res.body.country;
        account.owner.city = res.body.city;

        notification(language.current.dataChanged);

        this.form = {};
        account.authentication();

      })
      .catch(err => {
        throw err;
      });
    }
  },

  changeProfilePicture: {
    uploadButton: document.querySelector('#uploadImageFile'),
    changeButton: document.querySelector('.camera'),
    form: new FormData(),
    click() {

      this.uploadButton.click();
      this.uploadButton.onchange = () => {
        this.form.append('id', account.owner.id);
        this.form.append("file", this.uploadButton.files[0]);

        this.sendReq('put', `${domain}/changeProfilePicture`,this.form)
            .then(res => {

              account.owner.profilePicture = JSON.parse(res).body;
              document.querySelectorAll('.avatarka').forEach(avatarka => {
                avatarka.style.backgroundImage = ``;
                avatarka.style.backgroundImage = `url('${account.owner.profilePicture}')`;
              });
              notification(language.current.profilePictureChanged);
            })
            .catch(err => console.log(err));
        this.form  = new FormData();
      };
    },

    sendReq(method, url, body) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = () => {
          if (xhr.status >= 400) {
            reject(xhr.response);
          }
          else {
            resolve(xhr.response);
          }
        };

        xhr.onerror = () => {
          reject(xhr.response);
        };

        xhr.send(body);

      });
    }
  },

  deleteProfilePicture(){
    const form = {
      id: account.owner.id
    };
    sendRequest('put', `${domain}/deleteProfilePicture`,form)
        .then(res => {
          account.owner.profilePicture = res.body;
          document.querySelectorAll('.avatarka').forEach(avatarka => {
            avatarka.style.backgroundImage = `url('${account.owner.profilePicture}')`;
          });
        })
  },

  deleteAccount() {
    const req = {
      id: account.owner.id,
      password: document.querySelector('form.deleteAccount > input').value
    };
    sendRequest('delete', `${domain}/deleteAccount`, req)
        .then(res => {
          if (res.deleted){
            account.owner = {};
            account.entered = false;
            account.authentication();
            notification(language.current.accountDeleted);
          }
          else {
            document.querySelector('.errorLayer').style.display = 'block';
            document.querySelector('.errorWindow > p').innerHTML = language.current[res.body];
          }
        })
        .catch(err => console.log(err));
  },


};

const friend = {

  friends: {

    loaded: 0,

    template(array){
      let data = "";
      array.forEach( friend => {
        data += `<div class="friendAccount" id='f${friend.id}'>
          <img src="${friend.profilePicture}" class="friendAvatar">
          <h1>${friend.nickName} (${friend.age})<br><span>${friend.country} ${friend.city}</span></h1>
          <div class="confirmAction" onclick="friend.friends.delete(this)" ></div>
          <div class="actionAccount" onclick="buttons.friendAction.click(this)" data-active='false'"></div>
          <div class="playerActionLayer"></div>
        </div>`;

      });
      return data;
    },



    render(){
      let chunk = {
        id: account.owner.id,
        friendsId: account.owner.friendsId,
        loaded: this.loaded
      };
      if (this.loaded === 0) document.querySelector('div.friendList').innerHTML = "";
      if (account.owner.friendsId.length <= this.loaded) return;

      sendRequest('post',`${domain}/friendRender`, chunk)
          .then(res => {
            document.querySelector('div.friendList').innerHTML += this.template(res.body);
            this.loaded += 10;

            console.log('friends added');

            document.onscroll = () => {
              if (document.querySelector('.account').dataset.active === "true") {
                if (window.pageYOffset + window.innerHeight === document.querySelector('.account').scrollHeight) {
                  friend.friends.render();
                }
              }
            }
          })
          .catch(err => console.log(err));
    },

    delete(button){
      let req = {
        id: account.owner.id,
        friendId: button.parentElement.id.slice(1)
      };
      socket.emit('friendDelete', req, res => {
        if (res){
          account.owner.friendsId.splice(account.owner.friendsId.indexOf(req.friendId),1);
          button.parentElement.classList.add('deletedFriendAccount');
          setTimeout(() => {
            button.parentElement.style.display = 'none';
          }, 1500);
          friend.friends.loaded --;
          notification(language.current.removeFromFriends);
        }
      });
    }

  },

  friendRequests: {

    loaded: 0,

    template(array){
      let data = "";
      array.forEach(friendRequest => {
        data += `<div class="friendRequestAccount" id="r${friendRequest.id}">
          <img src="${friendRequest.profilePicture}" class="friendAvatar">
          <h1>${friendRequest.nickName} (${friendRequest.age})<br><span>${friendRequest.country} ${friendRequest.city}</span></h1>
          <div class="actionRequest add" onclick="friend.friendRequests.add(this)"></div>
          <div class="actionRequest remove" onclick="friend.friendRequests.remove(this)"></div>
        </div>`;

      });
      return data;
    },



    render(){
      let chunk = {
        id: account.owner.id,
        friendRequestsId: account.owner.friendRequestsId,
        loaded: this.loaded
      };

      if (account.owner.friendRequestsId.length <= this.loaded) return;

      sendRequest('post',`${domain}/friendRequestRender`, chunk)
          .then(res => {
            document.querySelector('div.friendRequestList').innerHTML += this.template(res.body);
            this.loaded += 10;

            console.log('requests added');

            document.onscroll = () => {
              if (document.querySelector('.friendRequests').dataset.active === "true") {
                if (window.pageYOffset + window.innerHeight === document.querySelector('.friendRequests').scrollHeight) {
                  friend.friendRequests.render();
                }
              }
            }
          })
          .catch(err => console.log(err));
    },

    remove(button){
      let req = {
        id: account.owner.id,
        friendId: button.parentElement.id.slice(1)
      };
      socket.emit('friendRequestRemove', req, res => {
        if (res){

          account.owner.friendRequestsId.splice(account.owner.friendRequestsId.indexOf(req.friendId),1);
          button.parentElement.classList.add('deleteFriendRequestAccount');

          setTimeout(() => {
            button.parentElement.remove();
          }, 1500);

          friend.friendRequests.loaded --;
          notification(language.current.requestRejected);
          requestButtonRender();

        }
      });
    },

    add(button){
      let req = {
        id: account.owner.id,
        friendId: button.parentElement.id.slice(1)
      };
      socket.emit('friendAdd', req, res => {
        if (res){
          account.owner.friendsId.push(req.friendId);
          account.owner.friendRequestsId.splice(account.owner.friendRequestsId.indexOf(res),1);
          button.parentElement.classList.add('deleteFriendRequestAccount');

          setTimeout(() => {
            button.parentElement.remove();
          }, 1500);

          friend.friendRequests.loaded --;
          friend.friends.loaded = 0;
          document.querySelector('div.friendList').innerHTML = "";
          friend.friends.render();
          notification(language.current.requestAccepted);
          requestButtonRender();
        }


      });
    }

  },

  friendFind: {

    template(array){
      let data = "";
      array.forEach(result => {
        data += `<div class="searchResultAccount" id="s${result._id}">
          <img src="${result.profilePicture}" class="friendAvatar">
          <h1>${result.nickName} (${result.age})<br><span>${result.country} ${result.city}</span></h1>
          <div class="actionFindResult" onclick="friend.friendFind.actionClick(this)" data-active='false'"></div>
          <div class="actionFindResults remove" onclick="friend.friendRequests.remove(this);friend.friendFind.actionClick(this)"></div>
          <div class="actionFindResults add" onclick="friend.friendRequests.add(this);friend.friendFind.actionClick(this)"></div>
          <div class="actionFindResults send" onclick="friend.friendFind.friendRequest(this);friend.friendFind.actionClick(this)"></div>
          <div class="actionFindResults deleteFriend" onclick="friend.friends.delete(this);friend.friendFind.actionClick(this)"></div>

          <div class="playerActionLayer"></div>
        </div>`;


      });
      return data;
    },



    render(){

      let chunk = {
        id: account.owner.id,
        regEx: document.querySelector('input.searchFriendInput').value,
      };

      sendRequest('post',`${domain}/friendFind`, chunk)
          .then(res => {
            if (res.found) {
              document.querySelector('div.searchResultList').innerHTML = "";

              document.querySelector('div.searchResultList').innerHTML += this.template(res.body);

              console.log('find results added');

              document.onscroll = () => {
                if (document.querySelector('.search').dataset.active === "true") {
                  if (window.pageYOffset + window.innerHeight === document.querySelector('.search').scrollHeight) {
                    friend.friendFind.render();
                  }
                }
              }

            }
            else {
              document.querySelector('div.searchResultList').innerHTML = "";
              notification(language.current.noResults);
            }
          })
          .catch(err => console.log(err));
    },

    actionClick(clicked){
      const parent = clicked.parentElement;
      const button = parent.querySelector('div.actionFindResult');
      console.log(button.dataset.active);
      console.log(typeof button.dataset.active);
      if (button.dataset.active === 'false') {

        document.querySelector(`#${parent.id} > div.playerActionLayer`).style.display = 'flex';
        button.setAttribute('data-active', 'true');

        if (account.owner.id === button.parentElement.id.slice(1)) {
          document.querySelector(`#${parent.id} > .playerActionLayer`).innerHTML = language.current.itIsMe;
        }
        else if (account.owner.friendsId.some(account => {
          return account === button.parentElement.id.slice(1);
        })) {

          document.querySelector(`#${parent.id} > .playerActionLayer`).innerHTML = language.current.inYourFriends;
          document.querySelector(`#${parent.id} > div.deleteFriend`).classList.add('activeDeleteFriend');

        }
        else if (account.owner.friendRequestsId.some(account => {
          return account === button.parentElement.id.slice(1);
        })) {

          document.querySelector(`#${parent.id} > .playerActionLayer`).innerHTML = language.current.acceptFriendRequest;
          document.querySelector(`#${parent.id} > div.add`).classList.add('activeAdd');
          document.querySelector(`#${parent.id} > div.remove`).classList.add('activeRemove');

        }
        else if (account.owner.sentRequestsId.some(account => {
          return account === button.parentElement.id.slice(1);
        })) {

          document.querySelector(`#${parent.id} > .playerActionLayer`).innerHTML = language.current.friendRequestSent;

        }
        else {

          document.querySelector(`#${parent.id} > .playerActionLayer`).innerHTML = language.current.sendFriendRequest;
          document.querySelector(`#${parent.id} > div.send`).classList.add('activeSend');

        }

      }
      else {
        document.querySelector(`#${parent.id} > div.playerActionLayer`).style.display = 'none';
        document.querySelector(`#${parent.id} > .playerActionLayer`).innerHTML = '';
        button.setAttribute('data-active', 'false');
        document.querySelector(`#${parent.id} > div.add`).classList.remove('activeAdd');
        document.querySelector(`#${parent.id} > div.remove`).classList.remove('activeRemove');
        document.querySelector(`#${parent.id} > div.deleteFriend`).classList.remove('activeDeleteFriend');
        document.querySelector(`#${parent.id} > div.send`).classList.remove('activeSend');

      }

    },

    friendRequest(button){
      let req = {
        id: account.owner.id,
        friendId: button.parentElement.id.slice(1)
      };

      socket.emit('sendRequest', req, res => {

        if (res){
          account.owner.sentRequestsId.push(req.friendId);
          notification(language.current.requestSent);
        }



      });
    },

  }
};

function requestButtonRender(){
  if (account.owner.friendRequestsId.length !== 0) {
    document.querySelector('div.friendRequestButton').style.display = 'block';
    document.querySelector('div.friendRequestButton > div').innerHTML = account.owner.friendRequestsId.length;
  }
  else {
    document.querySelector('div.friendRequestButton').style.display = 'none';
    document.querySelector('div.friendRequestButton > div').innerHTML = '0';
  }
}
let socket;

function socketConnection(path) {
  socket = io.connect(path);

  socket.on('connect', () => {
    socket.emit('logIn', {id: account.owner.id});

    socket.on('friendRequest', res => {
      account.owner.friendRequestsId.push(res);
      requestButtonRender();
    });

    socket.on('friendAdd', res => {

      account.owner.friendsId.push(res);

      account.owner.sentRequestsId.splice(account.owner.sentRequestsId.indexOf(res),1);

      friend.friends.loaded = 0;
      friend.friends.render();

    });

    socket.on('friendRequestRemove', res => {

      account.owner.sentRequestsId.splice(account.owner.sentRequestsId.indexOf(res),1);

    });

    socket.on('friendDelete', res => {

      account.owner.friendsId.splice(account.owner.friendsId.indexOf(res),1);

    });

  });
}
function sendRequest(method, requestUrl, body = null){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, requestUrl);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      }
      else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));

  });
}

