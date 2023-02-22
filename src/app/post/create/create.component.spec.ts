import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { PostService } from '../post.service';

import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create a post and navigate to index page', () => {
  //   const postService = TestBed.inject(PostService);
  //   const router = TestBed.inject(Router);
  //   const spyCreate = spyOn(postService, 'create').and.returnValue(of({}));
  //   const spyNavigateByUrl = spyOn(router, 'navigateByUrl').and.stub();
  
  //   component.form.setValue({
  //     title: 'Test post',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   });
  //   component.submit();
  
  //   expect(spyCreate).toHaveBeenCalledWith(component.form.value);
  //   expect(spyNavigateByUrl).toHaveBeenCalledWith('post/index');
  // });

  // it('should not create a post and show validation errors', () => {
  //   const postService = TestBed.inject(PostService);
  //   const router = TestBed.inject(Router);
  //   const spyCreate = spyOn(postService, 'create').and.returnValue(of({}));
  //   const spyNavigateByUrl = spyOn(router, 'navigateByUrl').and.stub();
  
  //   component.form.setValue({
  //     title: '',
  //     body: ''
  //   });
  //   component.submit();
  
  //   expect(spyCreate).not.toHaveBeenCalled();
  //   expect(component.form.invalid).toBeTrue();
  //   expect(component.f.title.errors.required).toBeTrue();
  //   expect(component.f.body.errors.required).toBeTrue();
  //   expect(spyNavigateByUrl).not.toHaveBeenCalled();
  // });

  // it('should not save post ID in localStorage and log error message', () => {
  //   const postService = TestBed.inject(PostService);
  //   const router = TestBed.inject(Router);
  //   const spyCreate = spyOn(postService, 'create').and.returnValue(throwError(new Error('Failed to create post')));
  //   const spySaveData = spyOn(component, 'saveData').and.stub();
  //   const spyConsoleError = spyOn(console, 'error').and.stub();
  //   const spyNavigateByUrl = spyOn(router, 'navigateByUrl').and.stub();

  //   component.form.setValue({
  //     title: 'Test post',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   });
  //   component.submit();
  
  //   expect(spyCreate).toHaveBeenCalledWith(component.form.value);
  //   expect(spySaveData).not.toHaveBeenCalled();
  //   expect(spyConsoleError).toHaveBeenCalledWith('Failed to create post');
  //   expect(spyNavigateByUrl).not.toHaveBeenCalled();
  // });
  
});
