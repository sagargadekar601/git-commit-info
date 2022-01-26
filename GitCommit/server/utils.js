
function generateResponse(respData) {
  let reqExpired = false;
  try {
    if(respData && respData.files && respData.files.length > 0) {

      let commitData = {
        oid: respData.sha,
        message: respData.commit.message,
        author: respData.commit.author,
        committer: respData.commit.committer,
        parents: respData.parents,
        avatar_url: respData.author.avatar_url
      }

      let filteredData = [];      
      respData.files.forEach(file => {
        let fileData = {
          changeKind: "MODIFIED",
          headFile: 
          {
            path: file.filename
          },
          baseFile: 
          {
            path: file.filename
          },
          hunks: file.patch
        };
        filteredData.push(fileData);
      });

      commitData.fileData = filteredData;

      return commitData;
    }
  } catch (err) {
    error("generateResponse" + err);
    throw err;
  }

  return reqExpired;
}


module.exports = {
  generateResponse,
};
