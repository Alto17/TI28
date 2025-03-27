// Kalo mau Pake TailwindCSS Run ini
npx @tailwindcss/cli -i ./src/css/styles.css -o ./src/css/output.css --watch

// kalo mau push ke git hub,harus bikin branch baru,jgn pake branch main,(kasih nama branch sesuai fitur yang mau dibuat.Contoh : tugasnya bikin footer bikin nama branch footer)
git branch nama_branch
git checkout nama_branch

// kalo mau push ke github
git add .
git commit -m "nama_commit"
git push -u origin nama_branch