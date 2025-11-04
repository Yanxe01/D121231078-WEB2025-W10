const {
  addTask,
  getTasks,
  markComplete,
  deleteTask
} = require('./tasks');

const args = process.argv.slice(2);
const command = args[0];

async function main() {
  try {
    switch (command) {
      case 'add':
        if (!args[1]) {
          console.log('Error: Tugas tidak boleh kosong');
          return;
        }
        const newTask = await addTask(args[1]);
        console.log(`[+] Tugas ditambahkan: "${newTask.title}" (ID: ${newTask.id})`);
        break;

      case 'list':
        const tasks = await getTasks();
        if (tasks.length === 0) {
          console.log('Belum ada tugas');
          return;
        }
        console.log('DAFTAR TUGAS:');
        tasks.forEach((task, index) => {
          const status = task.completed ? '✓' : '○';
          const label = task.completed ? '(Selesai)' : '';
          console.log(`[${task.id}] ${status}${task.title} ${label}`);
        });
        break;

      case 'complete':
        if (!args[1]) {
          console.log('Error: Masukkan nomor tugas');
          return;
        }
        const taskId = parseInt(args[1]);
        const completedTask = await markComplete(taskId);
        console.log(`[✓] Tugas ditandai selesai: "${completedTask.title}"`);
        break;

      case 'remove':
        if (!args[1]) {
          console.log('Error: Masukkan nomor tugas');
          return;
        }
        const deleteId = parseInt(args[1]);
        await deleteTask(deleteId);
        console.log(`[-] Tugas dengan ID ${deleteId} telah dihapus.`);
        break;

      case 'done':
        if (!args[1]) {
          console.log('Error: Masukkan nomor tugas');
          return;
        }
        const doneId = parseInt(args[1]);
        const doneTask = await markComplete(doneId);
        console.log(`[✓] Tugas ditandai selesai: "${doneTask.title}"`);
        break;

      default:
        console.log('Perintah yang tersedia:');
        console.log('  add "nama tugas" - Tambah tugas');
        console.log('  list - Lihat daftar tugas');
        console.log('  done <id> - Tandai selesai');
        console.log('  remove <id> - Hapus tugas');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();