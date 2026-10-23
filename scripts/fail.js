// If npm runs lifecycle scripts, this makes the install fail loudly so the
// failure is observable in the scan's dependency-install telemetry.
console.error('POSTINSTALL_SCRIPT_EXECUTED');
process.exit(42);
