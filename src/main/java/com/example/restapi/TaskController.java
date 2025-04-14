package com.example.restapi;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private AtomicInteger idCounter = new AtomicInteger(3);
    private List<Task> taskList = new ArrayList<>();

    public TaskController() {
        taskList.add(new Task(1, "Do laundry", "pending"));
        taskList.add(new Task(2, "Buy groceries", "done"));
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskList;
    }

    @PostMapping
    public Task addTask(@RequestBody Task task) {
        task.setId(idCounter.getAndIncrement());
        taskList.add(task);
        return task;
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id) {
        taskList.removeIf(task -> task.getId() == id);
    }

    @PatchMapping("/{id}")
    public Task updateTaskStatus(@PathVariable int id, @RequestBody Map<String, String> updates) {
        for (Task task : taskList) {
            if (task.getId() == id) {
                if (updates.containsKey("status")) {
                    task.setStatus(updates.get("status"));
                }
                return task;
            }
        }
        return null; 
    }
}
