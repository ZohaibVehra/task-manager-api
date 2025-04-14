var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/tasks');
        const tasks = yield res.json();
        const list = document.getElementById('taskList');
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
    });
}
function addTask(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const titleInput = document.getElementById('title');
        const title = titleInput.value;
        yield fetch('/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, status: 'pending' }),
        });
        titleInput.value = '';
        loadTasks();
    });
}
function markDone(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`/tasks/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'done' }),
        });
        loadTasks();
    });
}
function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`/tasks/${id}`, { method: 'DELETE' });
        loadTasks();
    });
}
window.onload = loadTasks;
