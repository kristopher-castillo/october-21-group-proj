from app.models import db, Category

def seed_categories():
    arts = Category(category_name='Arts')
    illustrations = Category(category_name='Comics & Illustration')
    technology = Category(category_name='Design & Tech')
    film = Category(category_name='Film')
    food = Category(category_name='Food & Craft')
    games = Category(category_name='Games')
    music = Category(category_name='Music')
    publishing = Category(category_name='Publishing')

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
