import Fosters from "./schema";

module.exports.getDashboardInfo = async (user:string) => {
  try {
    console.log('!!model [getDashboardInfo] reached!! user: ', user);
    const dashboardInfo = await Fosters.find({user: user});
    return dashboardInfo;
  } catch (err) {
    console.log('!!model [getDashboardInfo] err!!', err);
  }
}

module.exports.getFosterInfo = async (user:string, foster:string) => {
  try {
    console.log('!!model [getFosterInfo] reached!! user: ', user, 'foster: ', foster);
    const fosterInfo = await Fosters.find({user: user, foster: foster})
    return fosterInfo;
  } catch (err) {
    console.log('!!model [getFosterInfo] err!!', err);
  }
}

module.exports.addFoster = async (newData:any) => {
  try {
    console.log('!!model [getFosterInfo] reached!!data: ', newData);
    const posted = await Fosters.create(newData);
    return posted;
  } catch (err) {
    console.log('!!model [addFoster] err!!', err);
  }
}

module.exports.updateFoster = async (id:string, newData:any) => {
  try {
    console.log('!!model [updateFoster] reached!! id: ', id );
    const posted = await Fosters.findOneAndUpdate({_id: id}, newData)
    return posted;
  } catch (err) {
    console.log('!!model [updateFoster] err!!', err);
  }
}

module.exports.deleteFoster = async (id:string) => {
  try {
    console.log('!!model [deleteFoster] reached!! id: ', id);
    const deleted = await Fosters.findOneAndDelete({_id: id});
    return deleted;
  } catch (err) {
    console.log('!!model [deleteFoster] err!!', err);
  }
}