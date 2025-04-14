type Task = {
    id: number;
    title: string;
    status: string;
  };
  
  async function loadTasks() {
    const res = await fetch('/tasks');
    const tasks: Task[] = await res.json();
    const list = document.getElementById('taskList')!;
    list.innerHTML = '';
  
    for (const task of tasks) {
      const li = document.createElement('li');
      li.textContent = `#${task.id}: ${task.title} [${task.status}]`;
  
      const doneBtn = document.createElement('button');
      doneBtn.textContent = '✓ Done';
      doneBtn.onclick = () => markDone(task.id);
  
      const delBtn = document.createElement('button');
      delBtn.textContent = '✖ Delete';
      delBtn.onclick = () => deleteTask(task.id);
  
      li.appendChild(doneBtn);
      li.appendChild(delBtn);
      list.appendChild(li);
    }
  }
  
  async function addTask(e: Event) {
    e.preventDefault();
    const titleInput = document.getElementById('title') as HTMLInputElement;
    const title = titleInput.value;
  
    await fetch('/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, status: 'pending' }),
    });
  
    titleInput.value = '';
    loadTasks();
  }
  
  async function markDone(id: number) {
    await fetch(`/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'done' }),
    });
    loadTasks();
  }
  
  async function deleteTask(id: number) {
    await fetch(`/tasks/${id}`, { method: 'DELETE' });
    loadTasks();
  }
  
  window.onload = loadTasks;