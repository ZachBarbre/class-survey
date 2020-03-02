create table class_status (
    id serial primary key, 
    status_title text not null, 
    rank integer);
​
insert into class_status
    (status_title, rank) 
    values 
        ('Awesome', 5), 
        ('Great', 4),
        ('Good', 3),
        ('Okay', 2),
        ('Poor', 1),
        ('Unranked', 0);

CREATE TABLE topic (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    class_status_id INTEGER
);

INSERT INTO topic (name, class_status_id)
    values
        ('HTML', 6),
        ('CSS', 6),
        ('JavaScript', 6),
        ('PostgesSQL', 6),
        ('Node', 6),
        ('Express', 6);