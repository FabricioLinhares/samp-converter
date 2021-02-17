export function cleanCommand(command) {
  const clean = command.split(/[,()]/);

  return clean.filter((elem) => elem != ";");
}

export function getCommandParams(command) {
  return cleanCommand(command).slice(1);
}
