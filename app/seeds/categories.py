from app.models import db, Category

def seed_categories():
    arts = Category(name='Arts')
    illustrations = Category(name='Comics & Illustration')
    technology = Category(name='Design & Tech')
    film = Category(name='Film')
    food = Category(name='Food & Craft')
    games = Category(name='Games')
    music = Category(name='Music')
    publishing = Category(name='Publishing')

    db.session.add(arts)
    db.session.add(illustrations)
    db.session.add(technology)
    db.session.add(film)
    db.session.add(food)
    db.session.add(games)
    db.session.add(music)
    db.session.add(publishing)

    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
