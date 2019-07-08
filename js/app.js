window.app = {

	serverUrl: 'http://192.168.1.9:8888',



	imageUrl: 'http://106.12.137.47:8888/group1/',

	/**
	 * 判断字符串是否为空
	 * @param {Object} str
	 * true：不为空
	 * false：为空
	 */
	isNotNull: function(str) {
		if (str != null && str != "" && str != undefined) {
			return true;
		}
		return false;
	},

	/**
	 * 封装消息提示框，默认mui的不支持居中和自定义icon，所以使用h5+
	 * @param {Object} msg
	 * @param {Object} type
	 */
	showToast: function(msg, type) {
		plus.nativeUI.toast(msg, {
			icon: "img/" + type + ".png",
			verticalAlign: "center"
		});
	},

	/**
	 * 保存用户的全局对象
	 * @param {Object} user
	 */
	setUserGlobalInfo: function(user) {
		var userInfoStr = JSON.stringify(user);
		plus.storage.setItem("userInfo", userInfoStr);
	},

	/**
	 * 获取用户的全局对象
	 */
	getUserGlobalInfo: function() {
		var userInfoStr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	},

	/**
	 * 获取用户的全局对象
	 */
	userLoginOut: function() {
		plus.storage.removeItem("userInfo");
	},
	/**
	 * 保存用户的联系人列表
	 * @param {Object} contactList
	 */
	setContactList: function(contactList) {
		var contactListStr = JSON.stringify(contactList);
		plus.storage.setItem("contactList", contactListStr);
	},

	/**
	 * 获取本地缓存中的联系人列表
	 */
	getContactList: function() {
		var contactListStr = plus.storage.getItem("contactList");

		if (!this.isNotNull(contactListStr)) {
			return [];
		}
		return JSON.parse(contactListStr);
	}


}
