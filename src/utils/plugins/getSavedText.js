export default function getSavedText(data = 1) {
  return new Promise(function (resolve, reject) {
    let content;
    switch (data) {
      case "1":
        content = `<br/><br/><h2>Crisis Plan:</h2>In case of inclement weather, therapists will not be expected to provide services. If a medical emergency arises, therapists are advised to call 911 and parents will be
            notified. Emergency contact information will be kept in the child’s files to be used if the parents are not present. In event of severe change in behavior; the therapist
            should remove the child to a safe environment, notify the parents, and the BCBA. The office at Master Faster should be called: 845-477-5000. The incident should be
            recorded on a descriptive data sheet including the antecedent, behavior and consequence <br/><br/><br/><br/>`;
        break;

      default:
        break;
    }
    resolve(content);
  });
}
