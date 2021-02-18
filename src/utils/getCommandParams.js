export function cleanCommand(command) {
  const clean = command.split(/[,()]/);

  return clean.filter((elem) => elem != ";");
}

export function getCommandParams(command) {
  const commandCleaned = cleanCommand(command);

  return commandCleaned.slice(1).filter((elem) => elem != "");
}
