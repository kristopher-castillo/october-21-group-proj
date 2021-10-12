from app.models import db, Pledge

def seed_pledges():
    demo_pledge = Pledge(amount=20,
                        user_id=1,
                        project_id=3)

    demo_pledge2 = Pledge(amount=30,
                        user_id=1,
                        project_id=2)

    marnie_pledge = Pledge(amount=60,
                        user_id=2,
                        project_id=1)

    marnie_pledge2 = Pledge(amount=40,
                        user_id=2,
                        project_id=3)

    bobbie_pledge = Pledge(amount=80,
                        user_id=3,
                        project_id=2)

    bobbie_pledge2 = Pledge(amount=20,
                        user_id=3,
                        project_id=1)

    db.session.add(demo_pledge)
    db.session.add(demo_pledge2)
    db.session.add(marnie_pledge)
    db.session.add(marnie_pledge2)
    db.session.add(bobbie_pledge)
    db.session.add(bobbie_pledge2)

    db.session.commit()


def undo_pledges():
    db.session.execute('TRUNCATE pledges RESTART IDENTITY CASCADE;')
    db.session.commit()




