function convertXML() {
  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");

  if (!fileInput.files.length) {
    alert("Please upload an XML file");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const xmlText = e.target.result;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const rows = [];
    const nodes = xmlDoc.getElementsByTagName("*");

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      if (node.children.length === 0 && node.textContent.trim()) {
        rows.push({
          tag: node.tagName,
          value: node.textContent.trim()
        });
      }
    }

    // Preview Table
    let tableHTML = "<table><tr><th>Tag</th><th>Value</th></tr>";
    rows.forEach(r => {
      tableHTML += `<tr><td>${r.tag}</td><td>${r.value}</td></tr>`;
    });
    tableHTML += "</table>";

    preview.innerHTML = tableHTML;

    // Convert to CSV
    let csv = "Tag,Value\n";
    rows.forEach(r => {
      csv += `${r.tag},${r.value}\n`;
    });

    // Download button
    const downloadBtn = document.createElement("button");
    downloadBtn.innerText = "Download Excel";
    downloadBtn.style.marginTop = "15px";

    downloadBtn.onclick = function () {
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "output.csv";
      a.click();
    };

    preview.appendChild(downloadBtn);
  };

  reader.readAsText(fileInput.files[0]);
}