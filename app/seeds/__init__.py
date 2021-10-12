from flask.cli import AppGroup

from app.seeds.projects import seed_projects, undo_projects
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .projects import seed_projects, undo_projects
from .pledges import seed_pledges, undo_pledges
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_projects()
    seed_pledges()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_projects()
    undo_pledges()
    # Add other undo functions here
