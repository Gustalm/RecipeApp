import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import { RecipeValidators } from "app/recipes/recipe-edit/validators.service";
import { Ingredient } from "app/shared/Ingredient.model";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  providers: [RecipeValidators]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private customValidators: RecipeValidators) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    })

    this.initializeForm();
  }

  initializeForm() {
    let recipeName, imageUrl, description = '';
    let recipeIngredients = new FormArray([]);
    let id = Math.floor((Math.random() * 999999));

    if (this.editMode) {
      this.recipeSelected = this.recipeService.getRecipeById(this.id);
      recipeName = this.recipeSelected.name;
      imageUrl = this.recipeSelected.imagePath;
      description = this.recipeSelected.description;
      id = this.recipeSelected.id;

      if (this.recipeSelected.ingredients)
        this.recipeSelected.ingredients.forEach(ingredient => {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, [Validators.required]),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        });
    }

    //  this.recipeForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   imageUrl: new FormControl(null,null, this.customValidators.required2),
    //   // , Validators.pattern('/(https?:\/\/.*\.(?:png|jpg))/i')
    //   description: new FormControl(null)
    // })
    this.recipeForm = this.formBuilder.group({
      id: [id],
      name: [recipeName, [Validators.required]],
      imagePath: [imageUrl, null, this.customValidators.required2],
      // , Validators.pattern('/(https?:\/\/.*\.(?:png|jpg))/i')
      description: [description, [Validators.required]],
      ingredients: recipeIngredients
    })
  }

  onSubmit() {
    let formProperties = this.recipeForm.value;
    let recipe = new Recipe(formProperties.id, formProperties.name, formProperties.description, formProperties.imagePath, formProperties.ingredients.value)

    if (this.editMode)
      this.recipeService.updateRecipe(recipe);
      // .subscribe((response: any) => {
      //   console.log("updated!" + response)
      // });
    else
      this.recipeService.addRecipe(recipe)
      // .subscribe((response: any) => {
      //   console.log("posted!" + response);
      // });

    this.router.navigate(['/recipes',recipe.id])
  }

  onCancel(){
    this.editMode = false;
    this.recipeForm.reset();
    this.router.navigate(['/recipes']);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name: new FormControl('', [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onRemoveIngredient(id: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(id);
  }
}
