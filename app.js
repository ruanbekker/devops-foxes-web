const foxes = [
  { src: "images/terraform-fox.png", name: "Terraform Fox" },
  { src: "images/ai-fox.png", name: "AI Fox" },
  { src: "images/redis-fox.png", name: "Redis Fox" },
  { src: "images/github-fox.png", name: "GitHub Fox" },
  { src: "images/kubernetes-fox.png", name: "Kubernetes Fox" },
  { src: "images/docker-fox.png", name: "Docker Fox" },
  { src: "images/java-fox.png", name: "Java Fox" },
  { src: "images/ruby-fox.png", name: "Ruby Fox" },
  { src: "images/postgresql-fox.png", name: "PostgreSql Fox" },
  { src: "images/python-fox.png", name: "Python Fox" },
  { src: "images/aws-fox.png", name: "AWS Fox" },
  { src: "images/go-fox.png", name: "Go Fox" },
];

let currentIndex = 0;

function nextFox() {
  currentIndex = (currentIndex + 1) % foxes.length;

  const foxImage = document.getElementById("foxImage");
  const foxName = document.getElementById("foxName");

  foxImage.src = foxes[currentIndex].src;
  // foxName.innerText = foxes[currentIndex].name;
}
