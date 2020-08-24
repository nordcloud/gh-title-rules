import { setFailed, setOutput, getInput } from '@actions/core';
import { context } from '@actions/github';

try {
    const title = String(context.payload.pull_request.title)
    const regex = new RegExp(getInput('regex'))
    const result = regex.exec(title)
    const task = result[1]
    setOutput("task_number", task);

} catch (error) {
    setFailed(`Title must start with ticket number: [MCT-123] Text`);
}
